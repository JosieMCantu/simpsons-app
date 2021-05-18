import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent, waitFor, getByText } from '@testing-library/react';
import SimpsonsQuoteContainer from './SimpsonsQuoteContainer';
import userEvent from '@testing-library/user-event';

const server = setupServer(rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
  return res(ctx.json([
    {
        "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
        "character": "Nelson Muntz",
        "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
        "characterDirection" : "Left"
    }
  ]))
}));

describe('App component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders App', async () => {

    render(<SimpsonsQuoteContainer />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    return waitFor(() => {
      screen.getByAltText('Nelson Muntz')
      screen.getByText('Quote: Shoplifting is a victimless crime, like punching someone in the dark.')
    })

  });
});
