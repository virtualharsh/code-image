import { Textarea } from "@heroui/input";

interface PreviewProps {
    fontSize: number;
}

export default function Preview({fontSize}:PreviewProps) {

    return (
        <div className="w-2/3 p-16">

            <Textarea
                className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                // label="Description"
                labelPlacement="outside"
                placeholder="Enter your Code"
                variant="underlined"
                style={{fontSize:`${fontSize}px`}}
            />
        </div>
    );
}
