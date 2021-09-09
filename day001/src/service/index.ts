import { handler } from '../api/hello'

export const fetchUsername = async (): Promise<{ name: string }> => {
  return await handler()
}
