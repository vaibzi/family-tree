import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  person: any | null;
};

export function PersonDialog({ open, onOpenChange, person }: Props) {
  if (!person) return null;

  const {
    name,
    gender,
    birthYear,
    deathYear,
    birthPlace,
    deathPlace,
    spouses,
    children,
  } = person;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>Family Details</DialogDescription>
        </DialogHeader>

        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={person.photoUrl || ""} />
            <AvatarFallback>
              {name
                ?.split(" ")
                .map((n: string) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="space-y-2 text-sm">
          <p>
            <strong>Gender:</strong> {gender || "Unknown"}
          </p>
          <p>
            <strong>Birth Year:</strong> {birthYear || "Unknown"}
          </p>
          <p>
            <strong>Birth Place:</strong> {birthPlace || "Unknown"}
          </p>
          <p>
            <strong>Death Year:</strong> {deathYear || "Unknown"}
          </p>
          <p>
            <strong>Death Place:</strong> {deathPlace || "Unknown"}
          </p>

          {/* Spouses */}
          {spouses && spouses.length > 0 && (
            <div>
              <strong>Spouse(s):</strong>
              <ul className="list-disc ml-5 mt-1">
                {spouses.map((s: any) => (
                  <li key={s.id}>{s.name}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Children */}
          {children && children.length > 0 && (
            <div>
              <strong>Children:</strong>
              <ul className="list-disc ml-5 mt-1">
                {children.map((c: any) => (
                  <li key={c.id}>{c.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
