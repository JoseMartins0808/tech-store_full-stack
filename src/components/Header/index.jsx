import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { SheetContent, SheetTrigger, Sheet, SheetHeader } from "../ui/sheet";

function Header() {
    return (
        <Card className="flex justify-between items-center p-7" style={{ padding: "1.5rem" }}>
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-bold">Menu</SheetHeader>
                    <div className="mt-2 flex flex-col gap-3">
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <LogInIcon size={16} />
                            Fazer Login
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <HomeIcon size={16} />
                            Inicial
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <PercentIcon size={16} />
                            Ofertas
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <ListOrderedIcon size={16} />
                            Catálogo
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>

            <h1 className="text-lg font-bold">
                <span className="text-primary">Martins</span> Store
            </h1>
            <Button size="icon" variant="outline">
                <ShoppingCartIcon />
            </Button>
        </Card>
    )
}

export default Header;