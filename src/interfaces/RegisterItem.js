export function createRegisterItem(fullName, birthDate) {
  return {
    id: Date.now(),
    fullName,
    birthDate,
    registerDate: new Date().toLocaleDateString("tr-TR"),
  };
}
