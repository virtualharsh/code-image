import { Form } from "@heroui/form";
import { Input } from "@heroui/input";

interface StylingProps {
    onFontSizeChange: (value: string) => void;
}

export default function Styling({onFontSizeChange}:StylingProps) {
    return (
        <Form className="w-1/3 mt-3 p-16">
            <Input
                label="Font Size"
                labelPlacement="outside"
                variant="underlined"
                placeholder="12"
                type="number"
                max={24}
                min={10}
                defaultValue="12"
                onChange={(e)=>onFontSizeChange(e.target.value)}
            />
        </Form>
    );
}