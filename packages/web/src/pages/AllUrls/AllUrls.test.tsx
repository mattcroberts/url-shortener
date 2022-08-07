import { MockedProvider } from "@apollo/client/testing";
import { render, screen, waitFor, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { GetAllUrlsDocument } from "../../generated";
import { AllUrls } from "./AllUrls";

describe("<ManageAllPage/>", () => {
  it("should render all urls", async () => {
    const mockResult = jest.fn().mockReturnValue({
      data: {
        urls: [
          {
            id: "1",
            shortUrl: "http://pbid.io/abc",
            originalUrl: "http://google.com",
          },
          {
            id: "2",
            shortUrl: "http://pbid.io/edf",
            originalUrl: "http://google.co.uk",
          },
          {
            id: "3",
            shortUrl: "http://pbid.io/ghi",
            originalUrl: "http://google.us",
          },
        ],
      },
    });
    
    render(<AllUrls />, {
      wrapper: ({ children }) => (
        <BrowserRouter>
          <MockedProvider
            mocks={[
              {
                request: {
                  query: GetAllUrlsDocument,
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
      expect(screen.getByTestId("urls-list")).not.toEqual(null)
    );

    expect(
      within(screen.getByTestId("urls-list")).getAllByRole("link")
    ).toHaveLength(3);
  });
});
