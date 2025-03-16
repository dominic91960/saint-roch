import React from "react";

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactMessageProps {
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  discoveryMedium: string;
  message: string;
}

const ContactMessage: React.FC<ContactMessageProps> = ({
  name,
  companyName,
  email,
  phoneNumber,
  discoveryMedium,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Body>
        <Preview>New Contact Us Form Submission</Preview>
        <Container>
          <Section>
            <Heading>New Contact Us Form Submission</Heading>
            <Text>
              You have received a new message from the Contact Us form on your
              website. Below are the details:
            </Text>
            <Hr />

            <Text>Name: {name}</Text>

            <Text>Company name: {companyName}</Text>

            <Text>
              Email:{" "}
              <Link href={`mailto:${email}`} target="_blank">
                {email}
              </Link>
            </Text>

            <Text>
              Tel:{" "}
              <Link href={`tel:${phoneNumber}`} target="_blank">
                {phoneNumber}
              </Link>
            </Text>

            <Text>Discovered via: {discoveryMedium}</Text>

            <Text>Message: {message}</Text>
            <Hr />

            <Text>Please review and respond accordingly.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactMessage;
