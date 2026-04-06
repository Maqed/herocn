import { Button } from "@/registry/new-york-v4/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/new-york-v4/ui/field";
import { Textarea } from "@/registry/new-york-v4/ui/textarea";

export default function TextareaInSurface() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Leave a comment</CardTitle>
      </CardHeader>
      <CardContent>
        <Field>
          <FieldLabel htmlFor="textarea-in-surface-message">Message</FieldLabel>
          <Textarea
            id="textarea-in-surface-message"
            variant="secondary"
            placeholder="Share your thoughts..."
            rows={4}
          />
          <FieldDescription>
            Your feedback helps us improve the product.
          </FieldDescription>
        </Field>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button size="sm">Submit</Button>
      </CardFooter>
    </Card>
  );
}
