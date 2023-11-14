import { NextApiRequest, NextApiResponse } from 'next';
import { Readable } from 'stream';
import Stripe from 'stripe'

async function buffer(readable: Readable) {
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(
      typeof chunk == "string" ? Buffer.from(chunk) : chunk
    )
  }

  return Buffer.concat(chunks);
}

const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: '2020-08-27', // Use a versão mais recente da API
});

export const config = {
  api: {
    bodyParser: false
  }
}

const relevantEvents = new Set([
  'checkout.session.completed'
])

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == 'POST') {
    const buf = await buffer(req)
    const secret = req.headers['stripe-signature']

    console.log('buf', buf);
    console.log('secret', secret);
    console.log('Entrando no post');
    console.log('Stripe webhook recebido:', buf.toString('utf8'));
    let event: Stripe.Event;
    console.log('let event', event);
    try {
      event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);

      console.log('event try', event);
    } catch (err) {
      return res.status(400).send(`Webhook error: ${err.message}`)
    }

    const type = event.type
    console.log('type', type);

    if (relevantEvents.has(type)) {
      console.log('Evento recebido', event)
    }

    res.json({ received: true })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed');
  }
}