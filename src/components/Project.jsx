import { Text, Image, Card } from "@mantine/core";

export default function Project(props) {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href={props.deployed}
      target="_blank"
    >
      <Card.Section>
        <Image src={props.img} h={160} />
      </Card.Section>
      <Text fw={500} size="lg" mt="md">
        {props.name}
      </Text>
      <Text mt="xs" c="dimmed" size="sm">
        {props.description}
      </Text>
    </Card>
  );
}
