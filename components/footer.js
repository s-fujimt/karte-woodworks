import Container from "@/components/container";

export default function Footer(props) {
  return (
    <div style={{ height: "10vh" }}>
      <Container className="flex h-full w-full items-center justify-center border-t border-gray-100">
        <div className="text-center text-sm">
          Copyright © {new Date().getFullYear()} {props?.copyright}.
          All rights reserved.
        </div>
      </Container>
    </div>
  );
}
