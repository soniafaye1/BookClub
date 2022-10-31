function User({ user }) {
  return (
    <>
      <p>
        {user.username}: {user.firstName} {user.lastName}
      </p>
    </>
  );
}

export default User;
