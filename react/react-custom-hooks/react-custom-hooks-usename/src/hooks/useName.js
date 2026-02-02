import { useState } from "react";

export default function useName() {
  //Zuerst Vorname speichern als eigene useState, weil er über ein Input feld ändern soll.
  const [firstName, setFirstName] = useState("");
  // die selber so wie mit Vorname wars..
  const [lastName, setLastName] = useState("");
  // Volle Name hat kein eigener useState, sondern wird aus Vor und Nachname erstellt, dadurch vermeiden wird doppelte useState.

  const fullName = `${firstName} ${lastName}`.trim();
  // Ich muss ein Array zurück geben.
  return [fullName, setFirstName, setLastName];
}
