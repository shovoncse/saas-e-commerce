"use client";

import { useStoreModel } from "@/hooks/use-store-model";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {

 const { isOpen, onClose } = useStoreModel();
 return (
  <div>
   <Modal
    title="Create a new store"
    description="Add a new store to manage products and orders."
    isOpen={isOpen}
    onClose={onClose}
   />
  </div>
 )
};