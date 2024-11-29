import styled from "styled-components";
import Link from "next/link";
import Button from "@/components/Button";

const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
  }
`;

const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export default function HomePage() {
  return (
    <>
      <h1>Styled Components with Props</h1>
      <h2>Props using the CSS Block / Complex Component</h2>
      <FlexContainer>
        <Button $variant="text">Button - Text</Button>
        <Button $variant="outlined">Button - Outlined</Button>
        <Button $variant="contained">Button - Contained</Button>
      </FlexContainer>
      <h2>Props using the ternary operator</h2>
      <FlexContainer>
        <Button>Button</Button>
        <Button $color="danger">Button Danger</Button>
      </FlexContainer>
      <p>
        This is a <StyledLink href="http://google.com">styled Link</StyledLink>
      </p>
    </>
  );
}
