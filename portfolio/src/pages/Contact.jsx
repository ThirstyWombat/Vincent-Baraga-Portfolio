import { TextInput, Fieldset, Textarea, Group, Button } from "@mantine/core";
import { useState } from "react";
//use useState to determine the value of each field, and if it's null, add the error tag stating the field is required?
export default function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  const handleChange = (e, key) => {
    setInputs({
      ...inputs,
      [key]: e.target.value,
    });

    setErrors({
      ...errors,
      [key]: "",
    });
  };
  const handleBlur = (key, message) => {
    if (!inputs[key]) {
      setErrors({
        ...errors,
        [key]: [message],
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Fieldset legend="Contact Me:">
        <TextInput
          label="Your name:"
          value={inputs.name}
          placeholder="Your name"
          onChange={(e) => handleChange(e, "name")}
          onBlur={() => handleBlur("name", "Your name cannot be empty")}
          error={errors.name}
          required
        />
        <TextInput
          label="Email:"
          placeholder="Email"
          type="email"
          mt="md"
          value={inputs.email}
          error={errors.email}
          onChange={(e) => handleChange(e, "email")}
          onBlur={() => handleBlur("email", "Your email cannot be empty")}
          required
        />
        <Textarea
          label="Message:"
          value={inputs.message}
          error={errors.message}
          onChange={(e) => handleChange(e, "message")}
          onBlur={() => handleBlur("message", "Your message cannot be empty")}
          placeholder="Your Message"
          required
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </Fieldset>
    </form>
  );
}
