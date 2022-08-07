import { Form } from "./Form";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { BrowserRouter } from "react-router-dom";
import { CreateUrlDocument } from "../../generated";
import userEvent from "@testing-library/user-event";

describe("<Form/>", () => {
  it("should call createUrl on submission", async () => {
    const mockResult = jest.fn().mockReturnValue({
      data: {
        createUrl: {
          id: "123",
          shortUrl: "http://pbid.io/abc123",
          originalUrl: "http://google.com",
        },
      },
    });
    render(<Form />, {
      wrapper: ({ children }) => (
        <MockedProvider
          mocks={[
            {
              request: {
                query: CreateUrlDocument,
                variables: { url: "http://google.com" },
              },
              result: mockResult,
            },
          ]}
        >
          <BrowserRouter>{children}</BrowserRouter>
        </MockedProvider>
      ),
    });

    await userEvent.type(
      screen.getByRole("textbox", { name: "URL" }),
      "http://google.com"
    );

    await userEvent.click(screen.getByRole("button", { name: "Shorten" }));

    expect(mockResult).toHaveBeenCalled();
  });

  it("should validate url field", async () => {
    const mockResult = jest.fn().mockReturnValue({
      data: {
        createUrl: {
          id: "123",
          shortUrl: "http://pbid.io/abc123",
          originalUrl: "http://google.com",
        },
      },
    });
    render(<Form />, {
      wrapper: ({ children }) => (
        <MockedProvider
          mocks={[
            {
              request: {
                query: CreateUrlDocument,
                variables: { url: "http://google.com" },
              },
              result: mockResult,
            },
          ]}
        >
          <BrowserRouter>{children}</BrowserRouter>
        </MockedProvider>
      ),
    });

    await userEvent.type(screen.getByRole("textbox", { name: "URL" }), "abc");

    await userEvent.click(screen.getByRole("button", { name: "Shorten" }));
    expect(
      screen.getByRole<HTMLInputElement>("textbox", { name: "URL" }).validity
        .valid
    ).toBe(false);

    expect(mockResult).not.toHaveBeenCalled();
  });

  it("should require url field", async () => {
    const mockResult = jest.fn().mockReturnValue({
      data: {
        createUrl: {
          id: "123",
          shortUrl: "http://pbid.io/abc123",
          originalUrl: "http://google.com",
        },
      },
    });
    render(<Form />, {
      wrapper: ({ children }) => (
        <MockedProvider
          mocks={[
            {
              request: {
                query: CreateUrlDocument,
                variables: { url: "http://google.com" },
              },
              result: mockResult,
            },
          ]}
        >
          <BrowserRouter>{children}</BrowserRouter>
        </MockedProvider>
      ),
    });

    await userEvent.click(screen.getByRole("button", { name: "Shorten" }));
    expect(
      screen.getByRole<HTMLInputElement>("textbox", { name: "URL" }).validity
        .valid
    ).toBe(false);

    expect(mockResult).not.toHaveBeenCalled();
  });
});
