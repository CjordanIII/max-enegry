import Navbar from "@/components/navbar/Navbar";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import {
    contactUs,
    signInRegister
} from "../../../components/navbar/navbarMetadata"

describe('Navbar component', () => {
    it('should render', () => {
      render(<Navbar />);
  
      const logo = screen.getByAltText("Dominion Energy");
      expect(logo).toBeInTheDocument();
  

      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("About Us")).toBeInTheDocument();
      expect(screen.getByText("FAQ")).toBeInTheDocument();
      expect(screen.getByText("Start/Stop Service")).toBeInTheDocument();
      expect(screen.getByText("Our Stories")).toBeInTheDocument();
  

      expect(screen.getByText(contactUs.btnLabel)).toBeInTheDocument();
      expect(screen.getByText(signInRegister.btnLabel)).toBeInTheDocument();
    });
  
    it('should have correct button styles', () => {
      render(<Navbar />);
  
      const contactButton = screen.getByText(contactUs.btnLabel);
      const signInButton = screen.getByText(signInRegister.btnLabel);
  
      // Check if the buttons have the correct style
      expect(contactButton).toHaveClass(contactUs.style.split(' ').join(' '));
      expect(signInButton).toHaveClass(signInRegister.style.split(' ').join(' '));
    });
  });