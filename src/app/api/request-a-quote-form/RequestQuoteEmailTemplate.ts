import { RequestQuoteFormData } from "@/validators/requestQuoteForm.schema";

export const RequestQuoteFormEmailTemplate = ({
  name,
  description,
  email,
}: RequestQuoteFormData) => {
  return `
    <div style="font-family: Arial, sans-serif; width: 100%; margin: 0 auto; padding: 20px; background-color: #F9F9F9;">
      <div style="background-color: #FFFFFF; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #FFB84D; padding-bottom: 10px;">
           Request a Quote
        </h2>
        <div style="margin-bottom: 20px;">
          <strong style="color: #555;">Name:</strong>
          <p style="margin: 5px 0; color: #333;">${name}</p>
        </div>
        <div style="margin-bottom: 20px;">
          <strong style="color: #555;">Sender Email:</strong>
          <p style="margin: 5px 0; color: #333;">${email}</p>
        </div>
        <div style="margin-bottom: 20px;">
          <strong style="color: #555;">Description:</strong>
          <div style="margin: 5px 0; padding: 15px; background-color: #F8F9FA; border-left: 4px solid #FFB84D; border-radius: 4px;">
            <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${description}</p>
          </div>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
          <p>This message was sent from your Addaan website</p>
        </div>
      </div>
    </div>
  `;
};