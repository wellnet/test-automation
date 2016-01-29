describe('Test my app', function() {
  it('echoes the parameter', function() {
 	var p = 'hello';
    expect(echo(p)).to.equal(p);
  });
  it('echoes doesn\'t echo a missing parameter', function() {
    expect(echo()).to.equal('');
  });
});
