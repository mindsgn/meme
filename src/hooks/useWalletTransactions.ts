import { useState, useEffect } from "react";
import { fetchWalletTransactions } from "@/src/api/services/walletService";

export interface WalletInfo {
  balance: number;
  tokenCount: number;
  tokens: Array<{
    name: string;
    balance: string;
  }>;
}

export const useWalletTransactions = (address: string) => {
  const [walletTransaction, setWalletTransaction] = useState<WalletInfo | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWalletTransactions = async () => {
      try {
        const data = await fetchWalletTransactions(address);
        console.log(data);
        // setWalletInfo(data);
        // setError(null);
      } catch (err) {
        setError("Failed to fetch wallet information");
      } finally {
        setLoading(false);
      }
    };

    getWalletTransactions();
  }, [address]);

  return { walletTransaction, loading, error };
};
