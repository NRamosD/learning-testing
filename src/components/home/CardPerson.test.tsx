import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import '@testing-library/jest-dom'
import { expect, test } from 'vitest'
import CardPerson from './CardPerson'

test('loads and displays Card person', async () => {
  // ARRANGE
  render(<CardPerson />)
  
  // ACT
  await userEvent.click(screen.getByText('Software Engineer'))
  await screen.findByRole("paragraph")

  // // ASSERT
  expect((await screen.findAllByText("Software Engineer")).length).toBe(1)
  // const ret = await screen.getByText("John")
  // console.log({ret})
  // expect(ret).toBe("John")
  // expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  // expect(screen.getByRole('button')).toBeDisabled()
})