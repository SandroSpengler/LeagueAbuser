import { render } from "@testing-library/react";
import App from "../App";

describe("App Tests", () => {
  it("App to exist", () => {
    render(<App />);

    expect(<App />).toBeDefined();
  });
});
