import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./HomeCard.scss";

const HomeCard = ({ data }) => {
  if (!data) {
    return;
  }

  const renderTooltip = (props) => (
    <Tooltip className="my-tooltip" id="button-tooltip" {...props}>
      Ir al perfil
    </Tooltip>
  );
  return (
    <div className="texto-principal cardHome">
      <OverlayTrigger
        placement="right-end"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <a href={data.html_url} target="_blank" rel="noreferrer">
          <img src={data.avatar_url} alt="Perfil GitHub" />
        </a>
      </OverlayTrigger>
      <p className="username">{data.login}</p>
      {data.location && <p className="location">{data.location}</p>}
    </div>
  );
};

export default HomeCard;
