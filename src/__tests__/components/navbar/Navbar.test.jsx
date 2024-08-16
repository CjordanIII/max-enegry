import Navbar from "@/components/navbar/Navbar";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
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
});