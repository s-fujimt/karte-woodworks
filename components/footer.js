import Container from "@/components/container";

export default function Footer(props) {
  return (
    <Container className="border-t border-gray-100">
      <div className="py-2 text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
    </Container>
  );
}
