import { Form } from "@heroui/form";
import { Select, SelectItem } from "@heroui/select";
import { Input } from "@heroui/input";
import { FontFamilyOptions } from "@/config/fonts.ts"

interface StylingProps {
    onFontSizeChange: (value: string) => void,
    onFontFamilyChange: (value: string) => void,
    onLetterSpaceChange: (value: string) => void;
    onLineHeightChange: (value: string) => void;
}

export default function Styling({ onFontSizeChange, onFontFamilyChange, onLetterSpaceChange, onLineHeightChange }: StylingProps) {

    return (
        <Form className="flex gap-y-4"
            id="styling"
            onSubmit={(e)=>e.preventDefault()}
        >
            <Input
                label="Font Size"
                id="fontSize"
                className="px-2"
                labelPlacement="inside"
                variant="underlined"
                placeholder="14"
                type="number"
                max={24}
                min={10}
                defaultValue="14"
                onChange={(e) => onFontSizeChange(e.target.value)}
            />

            <Select
                label="Font Family"
                placeholder="Select font family"
                variant="underlined"
                className="px-2"

                onChange={(e) => onFontFamilyChange(e.target.value)}
            >
                {FontFamilyOptions.map((font) => (
                    <SelectItem key={font.key}>
                        {font.label}
                    </SelectItem>
                ))}
            </Select>

            <div className="flex w-full">
                <Input
                    label="Letter Space"
                    id="letterspace"
                    className="px-2"
                    labelPlacement="inside"
                    variant="underlined"
                    placeholder="1"
                    type="number"
                    max={2}
                    min={-1}
                    step={0.2}
                    defaultValue="1"
                    onChange={(e) => onLetterSpaceChange(e.target.value)}
                />
                <Input
                    label="Line Height"
                    id="lineheight"
                    className="px-2"
                    labelPlacement="inside"
                    variant="underlined"
                    placeholder="1"
                    type="number"
                    max={3}
                    min={1}
                    step={0.2}
                    defaultValue="1"
                    onChange={(e) => onLineHeightChange(e.target.value)}
                />
            </div>
        </Form>
    );
}