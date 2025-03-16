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

interface DownloadMessageProps {
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  catalog: string;
}

const DownloadMessage: React.FC<DownloadMessageProps> = ({
  name,
  companyName,
  email,
  phoneNumber,
  catalog,
}) => {
  return (
    <Html>
      <Head />
      <Body>
        <Preview>New Catalog Download</Preview>
        <Container>
          <Section>
            <Heading>New Catalog Download</Heading>
            <Text>A user has downloaded a catalog. Below are the details:</Text>
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

            <Text>Downloaded catalog: {catalog}</Text>

            <Hr />

            <Text>Please review and respond accordingly.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default DownloadMessage;
