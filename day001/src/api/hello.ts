// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const handler = async (): Promise<{ name: string }> => {
  return {
    name: 'John Doe',
  }
}
