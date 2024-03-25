import { Button, useDisclosure } from "@chakra-ui/react"
import React from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export default function ModalDialog({ modalSize, tirggerText, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSizeClick = (newSize) => {
    onOpen()
  }



  return (
    <>
      <Button
        w={"100%"}
        onClick={() => handleSizeClick()}
        key={modalSize}
      >{tirggerText}</Button>

      <Modal onClose={onClose} size={modalSize} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
