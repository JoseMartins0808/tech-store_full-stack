"use client";
import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { SheetContent, SheetTrigger, Sheet, SheetHeader } from "../ui/sheet";
import { signIn, useSession, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";

function Header() {

    const { status, data } = useSession();

    async function handleLogin() {
        await signIn();
    }

    async function handleLogout() {
        await signOut();
    }

    return (
        <Card className="flex justify-between items-center p-7" style={{ padding: "1.5rem" }}>
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-bold">
                        Menu
                    </SheetHeader>
                    {status === "authenticated" && data?.user && (
                        <div className="flex flex-col">
                            <div className="py-4 flex item-center gap-2">
                                <Avatar>
                                    <AvatarFallback>
                                        {data.user.name?.[0].toUpperCase()}
                                    </AvatarFallback>
                                    {data.user.image &&
                                        <AvatarImage src={data.user.image} />}
                                </Avatar>
                                <p className="font-medium">{data.user.name}</p>
                            </div>
                            <Separator />
                        </div>
                    )}
                    <div className="mt-4 flex flex-col gap-3">
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <HomeIcon size={16} />
                            Inicial
                        </Button>
                        {status === "unauthenticated" && (
                            <Button onClick={handleLogin} variant="outline" className="w-full justify-start gap-2">
                                <LogInIcon size={16} />
                                Fazer Login
                            </Button>
                        )}
                        {status === "authenticated" && (
                            <Button onClick={handleLogout} variant="outline" className="w-full justify-start gap-2">
                                <LogOutIcon size={16} />
                                Fazer Logout
                            </Button>
                        )}

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