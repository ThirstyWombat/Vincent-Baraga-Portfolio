import { Box, List, Paper, Text, Anchor, ListItem } from "@mantine/core";

export default function Resume() {
  return (
    <Box mb="lg" w="50%">
      <Paper shadow="md" p="xl">
        <Anchor>Download My Resume</Anchor>
        <Text>Front End Proficiencies:</Text>
        <List>
          <List.Item>HTML</List.Item>

          <List.Item>CSS</List.Item>

          <List.Item>JavaScript</List.Item>

          <List.Item>jQuery</List.Item>

          <List.Item>REACT</List.Item>
        </List>

        <Text>Back End Proficiencies:</Text>
        <List>
          <List.Item>Node</List.Item>

          <List.Item>Express</List.Item>

          <List.Item>MySQL,Sequelize</List.Item>

          <List.Item>MongoDB, Mongoose</List.Item>
        </List>
      </Paper>
    </Box>
  );
}
