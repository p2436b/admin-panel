const UpdateBuildings: React.FC = () => {
  return (
    <form>
      <label htmlFor='buildingsFile'>Select buildings file:</label>
      <input id='buildingsFile' type='text' />
      <button className='bg-sky-800 text-white px-4 py-2 rounded-md'>
        Upload
      </button>
    </form>
  );
};

export default UpdateBuildings;
