
const Footer = ({footNote}) => (
    <div className="bg-dark text-light fixed-bottom text-end p-2">
        <span> {footNote || "hope all's well"} </span>
    </div>
);

export default Footer;