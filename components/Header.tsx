import { ConnectButton } from "web3uikit"
import Link from "next/link"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            <Link href="/">NFT Marketplace</Link>
            <div className="flex flex-row items-center gap-5">
                <Link href="/">
                    Home
                </Link>
                <Link href="/sell-nft">
                    Sell NFTs
                </Link>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}