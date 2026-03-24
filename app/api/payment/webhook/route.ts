// payment webhook handler

import { NextApiRequest, NextApiResponse } from 'next';

const paymentWebhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            // Your webhook processing logic here

            // Send a success response
            res.status(200).send('Webhook received successfully');
        } catch (error) {
            console.error('Error processing webhook:', error);
            res.status(500).send('Internal Server Error');
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default paymentWebhookHandler;
