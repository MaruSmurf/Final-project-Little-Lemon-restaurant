import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import ReservationPage from './pages/ReservationPage';
import Main from './components/Main'

test('Renders the BookingForm heading', () => {
  render(<ReservationPage/>);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();

const reserveButton = screen.getByRole("button");
fireEvent.click(reserveButton);

const headingElementNew = screen.getByText("Choose Date");
expect(headingElementNew).toBeInTheDocument();
})
test('Initialize/Update Times', () => {
  render(<BrowserRouter><Main/></BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const testTime = []
  screen.getByText("ReservationPage");
})