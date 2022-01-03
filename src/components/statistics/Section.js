import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">Upload stats</h2>}
      {children}
    </section>
  );
}

Section.protoTypes = {
  title: PropTypes.string,
};

export default Section;
