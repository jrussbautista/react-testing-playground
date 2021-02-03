import {
  render,
  screen,
  wait,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import User from "./User";

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    return res(ctx.json({ name: "James" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("shows loading text while api request is in progress", async () => {
  render(<User />);
  const loadingText = screen.getByText("Loading...");

  expect(loadingText).toBeInTheDocument();

  await waitFor(() => screen.getByRole("heading"));

  expect(screen.getByRole("heading")).toHaveTextContent("James");
});

test("error message is show when there's an error to api", async () => {
  server.use(
    // override the initial "GET /greeting" request handler
    // to return a 500 Server Error
    rest.get(
      "https://jsonplaceholder.typicode.com/users/1",
      (req, res, ctx) => {
        return res(ctx.status(500));
      }
    )
  );

  render(<User />);

  await waitFor(() => screen.getByRole("alert"));

  expect(screen.getByRole("alert")).toHaveTextContent(
    "Ops failed to load user"
  );
});
