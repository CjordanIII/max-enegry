import Navbar from "@/components/navbar/Navbar";
import MobileNavbar from "@/components/navbar/MobleNavbar";
import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import { useRouter } from 'next/router'; // Importing Next.js useRouter
import {
  navbarLinks, contactUs, signInRegister 
} from "../../../components/navbar/navbarMetadata"

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
jest.mock('next/link', () => {
  return ({ children, href }) => (
    <a href={href} onClick={() => window.location.assign(href)}>
      {children}
    </a>
  );
});

describe('Navbar Component', () => {
const mockSetShowNavbar = jest.fn();
beforeEach(() => {
  mockSetShowNavbar.mockClear();
});
  it('should render the Navbar with navigation links and buttons', () => {
    render(<Navbar />);

    // Check if all navigation links are rendered correctly
    navbarLinks.forEach((link) => {
      const navLink = screen.getByText(link.name);
      expect(navLink).toBeInTheDocument();
    });

    // Check if the buttons are rendered
    const contactButton = screen.getByText(contactUs.btnLabel);
    const signInButton = screen.getByText(signInRegister.btnLabel);
    expect(contactButton).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });

  it('should navigate to the correct page when a link is clicked', () => {
    const mockPush = jest.fn(); // Create a mock function for router.push
    useRouter.mockImplementation(() => ({
      push: mockPush, // Mock the push function
    }));

    render(<Navbar />);

    navbarLinks.forEach((link)=>{
      const links = screen.getByText(link.name)
      expect(links).toHaveAttribute("href",link.href);
    })
  });
  test("renders mobile navbar with correct links and buttons", () => {
    render(<MobileNavbar setShowNavbar={mockSetShowNavbar} showNavbar={true} />);

    // Check if all navbar links are rendered
    navbarLinks.forEach((link) => {
      expect(screen.getByRole("link", { name: link.name })).toBeInTheDocument();
    });

    // Check if the buttons are rendered
    expect(screen.getByRole("button", { name: "Contact Us" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign in/Register" })).toBeInTheDocument();
  });

  test("closes navbar when clicking outside", () => {
    render(<MobileNavbar setShowNavbar={mockSetShowNavbar} showNavbar={true} />);

    // Simulate clicking outside the navbar
    fireEvent.click(document);

    expect(mockSetShowNavbar).toHaveBeenCalledWith(false);
  });
});




