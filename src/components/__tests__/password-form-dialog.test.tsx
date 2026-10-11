import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { PasswordFormDialog } from "../surveys/password-form-dialog";

describe("PasswordFormDialog", () => {
  const defaultProps = {
    open: true,
    onOpenChange: vi.fn(),
    surveyTitle: "Urban Tree Canopy Study",
    onSuccess: vi.fn(),
  };

  it("renders security header, survey title, and input when open", () => {
    render(<PasswordFormDialog {...defaultProps} />);

    expect(screen.getByText("Protected Survey Access")).toBeInTheDocument();
    expect(screen.getByText("Urban Tree Canopy Study")).toBeInTheDocument();
    expect(screen.getByText("Protected Inquiry")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Unlock & Open Form" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });

  it("toggles password visibility when clicking eye button", () => {
    render(<PasswordFormDialog {...defaultProps} />);

    const passwordInput = screen.getByPlaceholderText("Enter password");
    expect(passwordInput).toHaveAttribute("type", "password");

    const toggleButton = screen.getByLabelText("Show password");
    fireEvent.click(toggleButton);

    expect(passwordInput).toHaveAttribute("type", "text");
    expect(screen.getByLabelText("Hide password")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Hide password"));
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("displays error message and sets aria-invalid when incorrect password submitted", () => {
    render(<PasswordFormDialog {...defaultProps} />);

    const input = screen.getByPlaceholderText("Enter password");
    fireEvent.change(input, { target: { value: "wrongpassword" } });

    const submitButton = screen.getByRole("button", { name: "Unlock & Open Form" });
    fireEvent.click(submitButton);

    expect(
      screen.getByText("Incorrect password. Please try again.")
    ).toBeInTheDocument();
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(defaultProps.onSuccess).not.toHaveBeenCalled();
    expect(defaultProps.onOpenChange).not.toHaveBeenCalled();
  });

  it("clears error message when user starts typing again", () => {
    render(<PasswordFormDialog {...defaultProps} />);

    const input = screen.getByPlaceholderText("Enter password");
    fireEvent.change(input, { target: { value: "wrong" } });
    fireEvent.click(screen.getByRole("button", { name: "Unlock & Open Form" }));

    expect(
      screen.getByText("Incorrect password. Please try again.")
    ).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "wrong1" } });
    expect(
      screen.queryByText("Incorrect password. Please try again.")
    ).not.toBeInTheDocument();
  });

  it("calls onSuccess and onOpenChange(false) when correct password entered", () => {
    const onSuccess = vi.fn();
    const onOpenChange = vi.fn();

    render(
      <PasswordFormDialog
        {...defaultProps}
        onSuccess={onSuccess}
        onOpenChange={onOpenChange}
      />
    );

    const input = screen.getByPlaceholderText("Enter password");
    fireEvent.change(input, { target: { value: "shrey1234@" } });

    const submitButton = screen.getByRole("button", { name: "Unlock & Open Form" });
    fireEvent.click(submitButton);

    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(
      screen.queryByText("Incorrect password. Please try again.")
    ).not.toBeInTheDocument();
  });

  it("submits on form submit with correct password", () => {
    const onSuccess = vi.fn();
    const onOpenChange = vi.fn();

    render(
      <PasswordFormDialog
        {...defaultProps}
        onSuccess={onSuccess}
        onOpenChange={onOpenChange}
      />
    );

    const input = screen.getByPlaceholderText("Enter password");
    fireEvent.change(input, { target: { value: "shrey1234@" } });
    fireEvent.submit(input.closest("form")!);

    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("calls onOpenChange(false) when Cancel is clicked", () => {
    const onOpenChange = vi.fn();

    render(
      <PasswordFormDialog
        {...defaultProps}
        onOpenChange={onOpenChange}
      />
    );

    const cancelButton = screen.getByRole("button", { name: "Cancel" });
    fireEvent.click(cancelButton);

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
