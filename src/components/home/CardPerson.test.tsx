import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import '@testing-library/jest-dom'
import { expect, test, vi } from 'vitest'
import CardPerson from './CardPerson'

test('loads and displays Card person', async () => {
  // Cuando se necesite mockear una funcion global como window.alert, se puede usar vi.stubGlobal
  const alertMock = vi.fn();
  vi.stubGlobal('alert', alertMock);
  

  // ARRANGE
  render(<CardPerson />)
  
  // ACT
  //1
  await userEvent.click(screen.getByText('Software Engineer'));
  //2
  const pLabel = await screen.findByRole("paragraph")

  // ASSERT
  //1
  expect(alertMock).toHaveBeenCalledWith('hola');
  //2
  expect(pLabel.innerHTML).toEqual("Software Engineer")
  //3
  expect(screen.getByText("John Doe")).toBeVisible()
})