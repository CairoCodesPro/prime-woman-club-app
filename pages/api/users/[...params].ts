import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {

  console.log(request.query)

  const users = [
    { id: 1, name: 'Cairo' },
    { id: 2, name: 'Felipe' },
  ]

  return response.json(users);
}