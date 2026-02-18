import { useState } from "react";
import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import ProductForm from "@/components/ProductForm";
import StyledButton from "@/components/Button";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [isEditMode, setIsEditMode] = useState(false);

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }

    mutate();
    setIsEditMode(false);
  }

  async function handleDeleteProduct(productId) {
    const response = await fetch(`/api/products/${productId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await response.json();
      router.push("/");
    } else {
      console.error(response.status);
    }
  }

  return (
    <ProductCard>
      {isEditMode ? (
        <ProductForm onSubmit={handleEditProduct} heading="Edit Fish Product" />
      ) : (
        <>
          <h2>{data.name}</h2>
          <p>Description: {data.description}</p>
          <p>
            Price: {data.price} {data.currency}
          </p>
        </>
      )}
      <ButtonContainer>
        <StyledButton type="button" onClick={() => setIsEditMode(!isEditMode)}>
          {isEditMode ? "Cancel" : "Edit"}
        </StyledButton>
        <StyledButton type="button" onClick={() => handleDeleteProduct(id)}>
          Delete
        </StyledButton>
        <StyledLink href="/">Back to all</StyledLink>
      </ButtonContainer>
    </ProductCard>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;
