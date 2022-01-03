import PropTypes from "prop-types";
import { SectionContainer, Title } from "./Statistics.styled";

function Section({ title, children }) {
  return (
    <SectionContainer>
      {title && <Title>Upload stats</Title>}
      {children}
    </SectionContainer>
  );
}

Section.protoTypes = {
  title: PropTypes.string,
};

export default Section;
