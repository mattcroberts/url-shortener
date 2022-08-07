import { MockedProvider } from "@apollo/client/testing";
import { render, screen, waitFor, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { GetUrlDocument } from "../../generated";
import { ManagePage } from "./Manage";

describe("<ManagePage/>", () => {
  it("should render shortened url and original url", async () => {
    const mockResult = jest.fn().mockReturnValue({
      data: {
        url: {
          id: "1",
          shortUrl: "http://pbid.io/abc",
          originalUrl: "http://google.com",
        },
      },
    });

    render(<ManagePage />, {
      wrapper: ({ children }) => (
        <BrowserRouter>
          <MockedProvider
            mocks={[
              {
                request: {
                  query: GetUrlDocument,
                },
                result: mockResult,
              },
            ]}
          >
            {children}
          </MockedProvider>
        </BrowserRouter>
      ),
    });

    await waitFor(() =>
      expect(screen.getByTestId("manage-url")).not.toEqual(null)
    );

    expect(
      within(screen.getByTestId("manage-url"))
        .getAllByRole<HTMLLinkElement>("link")
        .map((el) => el.href)
    ).toEqual(["http://pbid.io/abc", "http://google.com/"]);
  });
});
