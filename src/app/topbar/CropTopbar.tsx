function CropTopbar() {
  return (
    <header className="hidden md:flex h-16 bg-green-100 shadow  items-center px-4 justify-between">
      <h1 className="text-lg font-semibold">Crop</h1>

      <div className="flex items-center gap-2">
        <span>🔔</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full bg-[url(https://media.istockphoto.com/id/1154958041/photo/taking-care-of-the-crop-aerial-view-of-a-tractor-fertilizing-a-cultivated-agricultural-field.jpg?s=2048x2048&w=is&k=20&c=H0a7ngBV9Bu8Oq9SMWBnLxluAOVD7_-hBra_zrNRzcg=)] bg-cover bg-center"></div>
      </div>
    </header>
  );
}

export default CropTopbar;