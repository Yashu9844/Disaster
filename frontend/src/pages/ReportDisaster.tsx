import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from "@/components/ui/select";
import { Card, CardTitle } from "@/components/ui/card";

const FormSchema = z.object({
  address: z.string().min(5, {
    message: "Address must be at least 5 characters long.",
  }),
  imageUrl: z.string().url({
    message: "Please enter a valid URL.",
  }),
  disasterType: z.string().min(1, {
    message: "Please select a disaster type.",
  }),
  currentStatus: z.string().min(1, {
    message: "Please select the current status.",
  }),
});

function Report() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      address: "",
      imageUrl: "",
      disasterType: "",
      currentStatus: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      // Sending data to the backend
      const response = await fetch('http://localhost:3000/api/rep/addReport', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
     console.log(result)
      if (response.ok) {
        toast({
          title: "Report submitted successfully",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(result, null, 2)}</code>
            </pre>
          ),
        });
      } else {
        toast({
          title: "Submission failed",
          description: result.message || "Something went wrong.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting the report.",
      });
    }
  };

  return (
    <Card className="max-w-md bg-background mx-auto p-4 mt-10">
      <CardTitle className="my-4">Report Disaster</CardTitle>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter address" {...field} />
                </FormControl>
                <FormDescription>The location of the disaster.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="Enter image URL" {...field} />
                </FormControl>
                <FormDescription>
                  The link to an image representing the disaster or situation.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="disasterType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type of Disaster</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ""}
                  >
                    <SelectGroup>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Disaster Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="earthquake">Earthquake</SelectItem>
                        <SelectItem value="flood">Flood</SelectItem>
                        <SelectItem value="hurricane">Hurricane</SelectItem>
                        <SelectItem value="wildfire">Wildfire</SelectItem>
                        <SelectItem value="tsunami">Tsunami</SelectItem>
                      </SelectContent>
                    </SelectGroup>
                  </Select>
                </FormControl>
                <FormDescription>Choose the type of disaster.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="currentStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Status</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ""}
                  >
                    <SelectGroup>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Current Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </SelectGroup>
                  </Select>
                </FormControl>
                <FormDescription>
                  Choose the current status of the disaster.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </Card>
  );
}

export default Report;
