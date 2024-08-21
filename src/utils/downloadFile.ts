
export const downloadFile = (e: React.ChangeEvent<HTMLInputElement>, func: (reader: FileReader) => void) => {
  const reader = new FileReader();

  if (e.target.files && e.target.files[0]) {
    const file: File = e.target.files?.[0];

    reader.onloadend = () => func(reader);

    reader.readAsDataURL(file);
  }
}