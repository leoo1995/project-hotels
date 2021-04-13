import moment from "moment";
import "moment/locale/es";
moment.locale("es");
export default dateString =>
  moment(dateString ? dateString : {}).format("dddd, D [de] MMMM [del] YYYY");
