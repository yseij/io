import { render, screen } from "@testing-library/react";
import App from "./App";
import UserDetail from "./components/user_detail";
import UserData from "./components/user_data";

test("is de select er", () => {
  render(<App />);
  const GeenFilterElement = screen.getByText("Geen filter");
  expect(GeenFilterElement).toBeInTheDocument();
  const MaleElement = screen.getByText("Male");
  expect(MaleElement).toBeInTheDocument();
  const FemaleElement = screen.getByText("Female");
  expect(FemaleElement).toBeInTheDocument();
});

test("text boven de tabel", () => {
  render(<App />);
  const linkElement = screen.getByText(
    "klik op de headers (name, email en gender) van de tabel om te sorteren"
  );
  expect(linkElement).toBeInTheDocument();
});

test("is de tabel er", () => {
  render(<App />);
  const NameElement = screen.getByText("Name");
  expect(NameElement).toBeInTheDocument();
  const EmailElement = screen.getByText("Email");
  expect(EmailElement).toBeInTheDocument();
  const PhoneElement = screen.getByText("Phone");
  expect(PhoneElement).toBeInTheDocument();
  const GenderElement = screen.getByText("Gender");
  expect(GenderElement).toBeInTheDocument();
});

const mockChildUserDetailComponent = jest.fn();
jest.mock("./components/user_detail", () => (props) => {
  mockChildUserDetailComponent(props);
  return <mock-childComponent />;
});

test("UserDetail test", () => {
  render(
    <UserDetail
      open
      data={{
        name: { first: "Youri", last: "Seijkens" },
        picture: { medium: "persoon.img" },
        gender: "Male",
        email: "yseijkens@hotmail.com",
        phone: "+32489925171",
        location: { country: "Belgie", state: "test", city: "Hamont" },
      }}
    />
  );
  expect(mockChildUserDetailComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      open: true,
      data: {
        name: { first: "Youri", last: "Seijkens" },
        picture: { medium: "persoon.img" },
        gender: "Male",
        email: "yseijkens@hotmail.com",
        phone: "+32489925171",
        location: { country: "Belgie", state: "test", city: "Hamont" },
      },
    })
  );
});

const mockChildUserDataComponent = jest.fn();
jest.mock("./components/user_data", () => (props) => {
  mockChildUserDataComponent(props);
  return <mock-childComponent />;
});

test("UserData test", () => {
  render(
    <UserData
      open
      data={{
        name: { first: "Youri", last: "Seijkens" },
        phone: "+32489925171",
        email: "yseijkens@hotmail.com",
        gender: "Male",
      }}
    />
  );
  expect(mockChildUserDataComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      open: true,
      data: {
        name: { first: "Youri", last: "Seijkens" },
        phone: "+32489925171",
        email: "yseijkens@hotmail.com",
        gender: "Male",
      },
    })
  );
});
